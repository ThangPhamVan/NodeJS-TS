import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class SharePropEntity {
  @CreateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "created_at",
  })
  createdAt: Date;

  @UpdateDateColumn({
    default: () => "CURRENT_TIMESTAMP",
    type: "datetime",
    name: "updated_at",
  })
  updatedAt: Date;
}
