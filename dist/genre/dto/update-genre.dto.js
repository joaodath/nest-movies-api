"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGenreDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_genre_dto_1 = require("./create-genre.dto");
class UpdateGenreDto extends (0, mapped_types_1.PartialType)(create_genre_dto_1.CreateGenreDto) {
}
exports.UpdateGenreDto = UpdateGenreDto;
//# sourceMappingURL=update-genre.dto.js.map