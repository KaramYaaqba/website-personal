export * from './blogs.service';
import { BlogsService } from './blogs.service';
export * from './karam.service';
import { KaramService } from './karam.service';
export * from './mysiteWebAPI.service';
import { MysiteWebAPIService } from './mysiteWebAPI.service';
export * from './projects.service';
import { ProjectsService } from './projects.service';
export const APIS = [BlogsService, KaramService, MysiteWebAPIService, ProjectsService];
