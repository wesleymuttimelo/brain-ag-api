import {PartialType} from "@nestjs/mapped-types";
import {CreateHaverstDto} from "./create-haverst.dto";

export class UpdateHarvestDto extends PartialType(CreateHaverstDto) {}