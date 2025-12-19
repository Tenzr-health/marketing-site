# Deployment Guide - Tenzr Health Marketing Site

This guide covers deploying the Tenzr Health marketing site using Docker containers.

## Prerequisites

- Docker Engine 20.10 or higher
- Docker Compose 2.0 or higher
- Access to HubSpot account (Portal ID and Form IDs)
- (Optional) Cloudflare Analytics token

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Tenzr-health/marketing-site.git
cd marketing-site
```

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# HubSpot Configuration (Required)
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id_here
NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID=your_contact_form_id_here
NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID=your_newsletter_form_id_here

# HubSpot Server-side API (Optional)
HUBSPOT_ACCESS_TOKEN=your_access_token_here

# Cloudflare Analytics (Optional)
NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=your_cloudflare_token_here
```

### 3. Build and Run with Docker Compose

```bash
docker-compose up -d
```

The site will be available at `http://localhost:3000`

### 4. Verify Deployment

```bash
# Check container status
docker-compose ps

# View logs
docker-compose logs -f marketing-site

# Test the application
curl http://localhost:3000
```

## Docker Commands

### Build the Image

```bash
docker build -t tenzr-marketing-site:latest .
```

### Run the Container

```bash
docker run -d \
  --name tenzr-marketing \
  -p 3000:3000 \
  -e NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id \
  -e NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID=your_form_id \
  -e NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID=your_newsletter_id \
  -e NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=your_cloudflare_token \
  tenzr-marketing-site:latest
```

### Stop the Container

```bash
docker-compose down
```

### View Logs

```bash
docker-compose logs -f
```

### Restart the Container

```bash
docker-compose restart
```

## Production Deployment

### Using Docker Compose (Recommended)

1. **Prepare the server:**
   ```bash
   # Install Docker and Docker Compose
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   
   sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```

2. **Deploy the application:**
   ```bash
   # Clone repository
   git clone https://github.com/Tenzr-health/marketing-site.git
   cd marketing-site
   
   # Configure environment
   cp .env.example .env
   nano .env  # Edit with your credentials
   
   # Build and start
   docker-compose up -d
   ```

3. **Set up reverse proxy (NGINX):**

   Create `/etc/nginx/sites-available/tenzr-marketing`:
   
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

   Enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/tenzr-marketing /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

4. **Set up SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

### Using Docker Swarm

1. **Initialize Swarm:**
   ```bash
   docker swarm init
   ```

2. **Deploy as a service:**
   ```bash
   docker stack deploy -c docker-compose.yml tenzr-marketing
   ```

3. **Scale the service:**
   ```bash
   docker service scale tenzr-marketing_marketing-site=3
   ```

### Using Kubernetes

Create `k8s-deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tenzr-marketing
spec:
  replicas: 3
  selector:
    matchLabels:
      app: tenzr-marketing
  template:
    metadata:
      labels:
        app: tenzr-marketing
    spec:
      containers:
      - name: marketing-site
        image: tenzr-marketing-site:latest
        ports:
        - containerPort: 3000
        env:
        - name: NEXT_PUBLIC_HUBSPOT_PORTAL_ID
          valueFrom:
            secretKeyRef:
              name: hubspot-credentials
              key: portal-id
        - name: NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID
          valueFrom:
            secretKeyRef:
              name: hubspot-credentials
              key: contact-form-id
        - name: NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID
          valueFrom:
            secretKeyRef:
              name: hubspot-credentials
              key: newsletter-form-id
        - name: NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN
          valueFrom:
            secretKeyRef:
              name: cloudflare-credentials
              key: analytics-token
---
apiVersion: v1
kind: Service
metadata:
  name: tenzr-marketing
spec:
  selector:
    app: tenzr-marketing
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
```

Deploy to Kubernetes:
```bash
kubectl apply -f k8s-deployment.yaml
```

## Environment Configuration

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | Your HubSpot Portal ID | `12345678` |
| `NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID` | Contact form ID from HubSpot | `abc123-def456-ghi789` |
| `NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID` | Newsletter form ID from HubSpot | `xyz789-uvw456-rst123` |

### Optional Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `HUBSPOT_ACCESS_TOKEN` | Server-side API access token | `pat-na1-...` |
| `NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` | Cloudflare Web Analytics token | `abc123def456...` |

## Health Checks

The application includes a health check endpoint at `/api/health`. Configure your load balancer or orchestrator to use this endpoint.

Example health check configuration:
- **Interval**: 30 seconds
- **Timeout**: 10 seconds
- **Retries**: 3
- **Start period**: 40 seconds

## Monitoring and Logs

### View Real-time Logs

```bash
# All logs
docker-compose logs -f

# Specific container
docker-compose logs -f marketing-site

# Last 100 lines
docker-compose logs --tail=100 marketing-site
```

### Log Management

For production, configure a log driver in `docker-compose.yml`:

```yaml
services:
  marketing-site:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

Or use a centralized logging solution like:
- **ELK Stack** (Elasticsearch, Logstash, Kibana)
- **Loki** with Grafana
- **CloudWatch** (AWS)
- **Stackdriver** (GCP)

## Performance Optimization

### Image Optimization

The Dockerfile uses multi-stage builds to minimize image size:

```bash
# Check image size
docker images tenzr-marketing-site:latest
```

### Caching

Next.js automatically caches static assets. Configure a CDN for better performance:

1. **Cloudflare**:
   - Add your domain to Cloudflare
   - Enable caching for static assets
   - Configure cache rules

2. **AWS CloudFront**:
   ```bash
   # Point CloudFront to your Docker container origin
   ```

### Resource Limits

Configure resource limits in `docker-compose.yml`:

```yaml
services:
  marketing-site:
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
```

## Security Best Practices

1. **Never commit `.env` files** - Always use `.env.example` as a template
2. **Use secrets management** - For production, use Docker secrets or a secrets manager
3. **Keep images updated** - Regularly rebuild with `npm update` to get security patches
4. **Run as non-root** - The Dockerfile already configures a non-root user
5. **Enable HTTPS** - Always use SSL/TLS in production
6. **Scan images** - Use `docker scan` or Trivy to check for vulnerabilities

```bash
# Scan for vulnerabilities
docker scan tenzr-marketing-site:latest
```

## Troubleshooting

### Container Won't Start

```bash
# Check logs
docker-compose logs marketing-site

# Check container status
docker-compose ps

# Inspect container
docker inspect tenzr-marketing-site
```

### Port Already in Use

```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill the process
sudo kill -9 <PID>

# Or use a different port in docker-compose.yml
ports:
  - "8080:3000"
```

### Environment Variables Not Working

```bash
# Verify environment variables are loaded
docker exec tenzr-marketing-site env | grep HUBSPOT

# Rebuild with no cache
docker-compose build --no-cache
docker-compose up -d
```

### Image Build Fails

```bash
# Clean Docker system
docker system prune -a

# Rebuild
docker-compose build --no-cache
```

## Backup and Recovery

### Backup Configuration

```bash
# Backup environment files
tar -czf backup-$(date +%Y%m%d).tar.gz .env docker-compose.yml

# Backup with encryption
tar -czf - .env docker-compose.yml | openssl enc -aes-256-cbc -pbkdf2 -out backup-$(date +%Y%m%d).tar.gz.enc
```

### Restore

```bash
# Restore from backup
tar -xzf backup-20250101.tar.gz

# Restore encrypted backup
openssl enc -d -aes-256-cbc -pbkdf2 -in backup-20250101.tar.gz.enc | tar -xz
```

## Updates and Maintenance

### Update Application

```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Update Dependencies

```bash
# Update npm packages
npm update

# Rebuild Docker image
docker-compose build --no-cache
```

### Zero-Downtime Deployment

Use Docker Swarm or Kubernetes for zero-downtime deployments, or use a blue-green deployment strategy:

```bash
# Build new version
docker build -t tenzr-marketing-site:v2 .

# Start new container
docker run -d --name tenzr-marketing-v2 -p 3001:3000 tenzr-marketing-site:v2

# Test new version
curl http://localhost:3001

# Switch traffic (update load balancer/proxy)
# Then stop old container
docker stop tenzr-marketing-site
docker rm tenzr-marketing-site
```

## Support and Contact

For deployment issues or questions:
- Email: hello@tenzrhealth.com
- Phone: 1.833.988.9497
- Documentation: [GitHub Repository]

## License

Copyright © 2025 Tenzr Health. All rights reserved.
