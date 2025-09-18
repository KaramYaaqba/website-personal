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
  timelineData = [
    {
      type: 'company',
      current: true,
      companyName: 'eKitabu',
      title: 'Senior Full-Stack Software Engineering',
      description: `I was instrumental in modernizing eKitabu's systems by architecting and implementing efficient solutions to replace legacy processes. I designed and developed scalable backends using the .NET stack and PostgreSQL, ensuring robust data management and faster response times. I also contributed to creating user-friendly frontends with Angular, enhancing usability and accessibility for clients. By leveraging CI/CD pipelines on Azure, I streamlined deployment and ensured high system availability. My efforts significantly improved operational efficiency, reducing delays and centralizing critical data for better decision-making`
    },
    {
      type: 'company',
      companyName: 'Microsoft',
      title: 'Cloud Software Engineer',
      description: `In my role as a Cloud Software Engineer, I developed and implemented innovative solutions to optimize operations and improve client satisfaction. I designed and built software to automate latency tracking for AirJaldi's routers in India, leveraging C# and Azure Cosmos DB, resulting in a 20% increase in client satisfaction. For eKitabu, I automated server provisioning and deployment processes using HashiCorp Terraform on Azure, eliminating manual effort and reducing server deployment time from one week to just a few hours. My work focused on delivering scalable, efficient, and automated solutions to address critical operational challenges. These contributions enhanced overall system performance and streamlined workflows for both organizations.`
    },
    {
      type: 'company',
      companyName: 'iConnect-tech',
      title: 'Senior Software Enginner/ Tech Lead',
      description: `As a Senior Full Stack Developer, I played a critical role in modernizing Medcor's Nurse Call Center application, transitioning it from a paper-based process to a fully digital solution. I developed a multi-tier backend using C#, VB.NET, and the .NET framework, incorporating SOAP (via WCF) and SignalR for communication, and utilized ADO.NET with MS SQL for data management. I followed Domain-Driven Design (DDD) principles and leveraged an in-house code generator to streamline class and code generation. Additionally, I implemented a REST API for seamless client connectivity and used Active Directory for secure authentication. By deploying the solution through CI/CD pipelines on an in-house IIS server, the system enabled real-time call logging and processing, reduced waiting times for patients, and allowed smooth integration of interpreters into calls, greatly enhancing efficiency and patient satisfaction.`
    },
    {
      type: 'company',
      companyName: 'University of Birmingham',
      title: 'Master of Robotics',
      description: `I pursued an MSc in Robotics, focusing on advanced topics such as SLAM (Simultaneous Localization and Mapping), ROS (Robot Operating System), machinery, and kinematics. My studies combined theoretical knowledge with practical applications, equipping me with expertise in robotic systems and automation. For my master’s thesis, I worked on enhancing vision algorithms for the STRANDS project, a leading robotics team in Europe. This work involved developing innovative solutions to improve robotic perception and navigation capabilities. The experience deepened my understanding of cutting-edge robotics technologies and their real-world applications.`
    },
    {
      type: 'company',
      companyName: 'iConnect-tech',
      title: 'Software Enginner',
      description: `As a Junior Full Stack Developer, I contributed to the modernization of Medcor's Nurse Call Center application, helping transition it from a paper-based process to a fully digital solution. I assisted in developing a multi-tier backend using C#, VB.NET, and the .NET framework`
    },
    {
      type: 'company',
      companyName: 'Arab American University - Palestine',
      title: 'BSc Computer Sceince',
      description: ``
    }

    ];
  }
