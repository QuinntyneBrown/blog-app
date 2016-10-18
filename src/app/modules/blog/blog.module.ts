import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ArticleService } from "./article.service";
import { ArticlePageComponent } from "./article-page.component";
import { ArticlesPageComponent } from "./articles-page.component";

const declarables = [
    ArticlePageComponent,
    ArticlesPageComponent
];

const providers = [
    ArticleService
];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class BlogModule { }
