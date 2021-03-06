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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MovieService = class MovieService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.movie.create({
            data: data,
        });
    }
    async findAll() {
        return await this.prisma.movie.findMany({
            include: {
                staff: {
                    select: {
                        name: true,
                        img: true,
                        birth: true,
                        staff: true,
                    },
                },
                genre: {
                    select: {
                        name: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return await this.prisma.movie.findUnique({
            where: {
                id: id,
            },
            include: {
                staff: {
                    select: {
                        name: true,
                        img: true,
                        birth: true,
                        staff: true,
                    },
                },
                genre: {
                    select: {
                        name: true,
                    },
                },
            },
        });
    }
    async update(id, data) {
        return await this.prisma.movie.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async remove(id) {
        return await this.prisma.movie.delete({
            where: {
                id: id,
            },
        });
    }
    async removeAll() {
        return await this.prisma.movie.deleteMany({});
    }
    async addInfo(data) {
        if (data.genreId && data.staffId) {
            await this.prisma.movie.update({
                where: {
                    id: data.movieId,
                },
                data: {
                    genre: {
                        connect: data.genreId,
                    },
                    staff: {
                        connect: data.staffId,
                    },
                },
            });
            return await this.findOne(data.movieId);
        }
        else if (data.genreId && !data.staffId) {
            await this.prisma.movie.update({
                where: {
                    id: data.movieId,
                },
                data: {
                    genre: {
                        connect: data.genreId,
                    },
                },
            });
            return await this.findOne(data.movieId);
        }
        else if (!data.genreId && data.staffId) {
            await this.prisma.movie.update({
                where: {
                    id: data.movieId,
                },
                data: {
                    staff: {
                        connect: data.staffId,
                    },
                },
            });
            return await this.findOne(data.movieId);
        }
        else if (!data.genreId && !data.staffId) {
            return {
                error: 'No data to update',
            };
        }
    }
};
MovieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map