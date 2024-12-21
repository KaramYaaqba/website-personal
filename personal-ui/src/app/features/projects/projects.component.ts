import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectDetailDialogComponent } from '../project-detail-dialog/project-detail-dialog.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ProjectDetailDialogComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @ViewChild('projectDetails') projectDetailsTemplate!: TemplateRef<any>;

  projects = [
    {
      company: 'iConnect-Tech',
      name: 'AFKAM',
      stack: '.NET (3.5–5), ASP.NET, MS SQL, Silverlight, SignalR',
      role: 'Back-End/Front-End, Cloud, Full-Stack Development, Database Design, SOAP Integration, Telemedicine (Healthcare)',
      businessPerspective:
        'AFKAM is a core service at Medcor that provides medical assistance over the phone to employees across various U.S. states. It acts as a central repository for employee and employer data, as well as insurance information. The system records work incidents, manages swift medical responses (sometimes life-saving), and coordinates with insurance companies. Within AFKAM, I worked on the “Triage Wizard,” a guided process for on-call nurses to handle incoming calls, determine necessary care (from calling 911 to advising self-care), locate the nearest covered medical facility, and generate the appropriate reports. Our call center integrated with Mitel’s phone system, enabling features like group calls with translators.',
      technicalPerspective:
        'AFKAM is built as a monolithic application with a multi-layered architecture. It includes Business Entities (BEs), Data Access Objects (DAOs), a server layer using WCF (SOAP-based), and dynamic ASP.NET front-end pages. Administrators can create new objects, windows, and list items on the fly to adapt to diverse client needs. The database layer uses MS SQL, and we used a custom code generator to streamline class creation across all layers, allowing developers to focus on core logic.'
    },
    {
      company: 'iConnect-Tech',
      name: 'Android Wizard',
      stack: '.NET (3.5–5), ASP.NET, MS SQL, SQLite',
      role: 'Back-End, Cloud, IIS, Database Design, SOAP, Telemedicine (Healthcare)',
      businessPerspective:
        'Following the success of the web-based call center solution, Medcor wanted to give remote nurses access to the AFKAM “Wizard” via Android tablets. As the technical lead for the backend, I developed a REST server to integrate with the existing AFKAM backend. This enabled the Android front-end to access region-specific data while still leveraging AFKAM’s core functionalities.',
      technicalPerspective:
        'The front-end team used Kotlin for the Android application. Since the devices were exclusively Android and the team already had Kotlin expertise, it was the natural choice. On the backend, I optimized AFKAM’s database to deliver region-specific subsets of data and migrated from MS SQL to SQLite for Android compatibility.'
    },
    {
      company: 'Microsoft',
      name: 'Network Health Checker',
      stack: '.NET Core, Azure',
      role: 'Back-End, Cloud',
      businessPerspective:
        'Airjaldi, an ISP in India, partnered with Microsoft’s Airband initiative to extend internet connectivity to underserved regions. They required a system to monitor the health of their MicroTek routers, detect issues before they escalate, and respond quickly to user-reported problems.',
      technicalPerspective:
        'I maintained a router IP list in SQLite and built a C# script to ping routers and log performance data. This data could then be analyzed to predict and report potential outages or high latency issues. The goal was to move toward a predictive model, leveraging collected data to anticipate failures.'
    },
    {
      company: 'Microsoft',
      name: 'One-Click Server Deploy',
      stack: 'Azure, HashiCorp',
      role: 'Back-End, Cloud',
      businessPerspective:
        'eKitabu sought to expand beyond Kenya into Rwanda and Malawi. Their challenge was deploying servers quickly and consistently across multiple locations. Microsoft aimed to provide a one-click solution for server deployment.',
      technicalPerspective:
        'I used Terraform for infrastructure provisioning on Azure, along with a Bash script to pull the latest eKitabu server code, install necessary software and packages, and deploy content onto the newly created VM. This automated approach drastically simplified and expedited the server deployment process.'
    },
    {
      company: 'eKitabu',
      name: 'Merlin',
      stack: '.NET, PostgreSQL, Angular, Kotlin',
      role: 'Back-End, Front-End, Mobile Development, Cloud',
      businessPerspective:
        'eKitabu needed a centralized platform—Merlin—to store projects, manage school participation, track devices in schools, and handle digital content distribution. Merlin serves as a dashboard and warehouse for their operational activities.',
      technicalPerspective:
        'We built the backend using the .NET stack with PostgreSQL as the database. On the front-end, we developed an Angular-based web interface. Additionally, I built a small Android application (in Kotlin) for on-site inventory management and device scanning in the schools.'
    },
    {
      company: 'eKitabu',
      name: 'Products Warehouse',
      stack: '.NET, PostgreSQL, Angular, Kotlin, Python, Spark, CosmosDB',
      role: 'Back-End, Front-End, Mobile Development, Cloud, Big Data',
      businessPerspective:
        'eKitabu uses the ONIX XML standard for book data. Searching these files is challenging and inefficient. The goal was to create a solution that would facilitate quick searches for specific books or categories, speeding up the book listing process for the sales team.',
      technicalPerspective:
        'I developed a Python solution using Apache Spark on Azure Databricks to parse ONIX files, convert the data into JSON format, and store it in CosmosDB. The front-end solution, built with .NET and Angular, provides an intuitive search interface. I also implemented an Azure Logic App workflow to process incoming ONIX files automatically, ensuring the database remains updated and ready for the sales team to use.'
    }
  ].reverse();

  constructor(private dialog: MatDialog) {}

  openDetails(project: any) {
    this.dialog.open(ProjectDetailDialogComponent, {
      data: project,
      width: '500px',
    });
  }
}