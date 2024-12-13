import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  timeLine = [
    {
      year: '2020 - Present',
      detail:
        'Senior Full-Stack Developer at eKitabu (Remote). Architected and built a system to convert ONIX files into Postgres with CosmosDB as an archive. Developed a DDD RESTful API for the Schools Register Portal using .NET and Angular. Reduced book search response times from two weeks to a couple of days.',
    },
    {
      year: '2019 - 2020',
      detail:
        'Cloud Software Engineer at Microsoft (USA). Automated latency tracking for AirJaldi routers using C# and Azure Cosmos DB. Implemented server provisioning using HashiCorp Terraform, reducing deployment time by 85%.',
    },
    {
      year: '2011 - 2019',
      detail:
        'Senior Full Stack Developer at iConnect Tech (Palestine). Developed a Nurse Call Center application using WPF/Silverlight, implementing a multi-tier backend. Designed REST APIs and deployed using CI/CD pipelines on IIS servers. Improved client processes from paper-based to fully digitalized systems.',
    },
    {
      year: '2014 - 2016',
      detail:
        'MSc Robotics at University of Birmingham (UK). Specialized in SLAM and ROS, kinematics, and vision algorithms. Enhanced vision algorithms for Europe’s leading robotics team (STRANDS).',
    },
    {
      year: '2007 - 2011',
      detail:
        'BSc Computer Information Technology at Arab American University (Palestine). Focused on IT infrastructure, software development, and data management.',
    },
  ];
}
