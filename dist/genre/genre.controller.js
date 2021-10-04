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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreController = void 0;
const common_1 = require("@nestjs/common");
const genre_service_1 = require("./genre.service");
const create_genre_dto_1 = require("./dto/create-genre.dto");
const update_genre_dto_1 = require("./dto/update-genre.dto");
let GenreController = class GenreController {
    constructor(genreService) {
        this.genreService = genreService;
    }
    async findAll() {
        return await this.genreService.findAll();
    }
    async findOne(id) {
        return await this.genreService.findOne(id);
    }
    async create(createGenreDto) {
        return await this.genreService.create(createGenreDto);
    }
    async update(id, updateGenreDto) {
        return await this.genreService.update(id, updateGenreDto);
    }
    async removeAll() {
        return await this.genreService.removeAll();
    }
    async remove(id) {
        return await this.genreService.remove(id);
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/list/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_genre_dto_1.CreateGenreDto]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_genre_dto_1.UpdateGenreDto]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "removeAll", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "remove", null);
GenreController = __decorate([
    (0, common_1.Controller)('genre'),
    __metadata("design:paramtypes", [genre_service_1.GenreService])
], GenreController);
exports.GenreController = GenreController;
//# sourceMappingURL=genre.controller.js.map