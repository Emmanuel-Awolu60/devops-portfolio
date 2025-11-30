import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Multi-Cloud K8s Cluster Automation",
    description: "Designed and implemented a fully automated Kubernetes cluster provisioning system using Terraform and Ansible across AWS and GCP. Reduced deployment time by 85%.",
    techStack: ["Terraform", "Kubernetes", "AWS", "GCP", "Ansible"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "2",
    title: "Serverless CI/CD Pipeline",
    description: "Built a robust CI/CD pipeline for a microservices architecture using GitHub Actions and AWS Lambda. Implemented automated testing, security scanning, and blue/green deployments.",
    techStack: ["GitHub Actions", "AWS Lambda", "Node.js", "Docker", "Snyk"],
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: "3",
    title: "High-Availability Monitoring Suite",
    description: "Deployed a centralized monitoring solution using Prometheus and Grafana with custom exporters for legacy applications. Configured intelligent alerting to Slack and PagerDuty.",
    techStack: ["Prometheus", "Grafana", "Linux", "Bash", "PagerDuty"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "4",
    title: "Legacy to Container Migration",
    description: "Led the migration of a monolithic Java application to a containerized microservices architecture managed by Kubernetes Helm charts.",
    techStack: ["Docker", "Java", "Helm", "Jenkins", "Nginx"],
    githubUrl: "https://github.com",
    featured: false
  }
];