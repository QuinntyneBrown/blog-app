import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./articles-page.component.html"),
    styles: [require("./articles-page.component.scss")],
    selector: "articles-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesPageComponent implements OnInit { 
    ngOnInit() {

    }
}
