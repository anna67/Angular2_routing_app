"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var post_service_1 = require('../service/post.service');
var app_settings_1 = require('../settings/app.settings');
var PostComponent = (function () {
    function PostComponent(p_list) {
        this.p_list = p_list;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.getPost_list();
    };
    PostComponent.prototype.getPost_list = function () {
        var _this = this;
        this.p_list.PostFunction().subscribe(function (res) { _this.post_list = res; });
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'post-component',
            templateUrl: app_settings_1.templates_locations + 'post/post.list.html',
            providers: [
                post_service_1.PostService
            ]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map