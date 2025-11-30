import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: "Cloud Platforms",
    items: ["AWS (Solutions Architect)", "Google Cloud Platform", "Azure", "DigitalOcean"],
    icon: "Cloud"
  },
  {
    category: "Containerization & Orchestration",
    items: ["Docker", "Kubernetes (K8s)", "Helm", "Docker Compose", "ECS/EKS"],
    icon: "Box"
  },
  {
    category: "CI/CD & Automation",
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "ArgoCD"],
    icon: "Zap"
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "Ansible", "CloudFormation", "Pulumi", "Packer"],
    icon: "Code"
  },
  {
    category: "Monitoring & Logging",
    items: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "CloudWatch"],
    icon: "Activity"
  },
  {
    category: "Scripting & Development",
    items: ["Python", "Bash/Shell", "Go", "JavaScript/Node.js", "Git"],
    icon: "Terminal"
  }
];