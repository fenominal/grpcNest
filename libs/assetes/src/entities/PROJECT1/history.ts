import { IsAlphanumeric, IsDefined, Length } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';

export class messageTypes {
  @Column({ type: 'varchar', nullable: true })
  status: string; // value only pass or fail.

  @Column({ type: 'varchar', nullable: true })
  medium: string; // value only email or sms

  @Column({ type: 'varchar', nullable: true })
  message: string;

  @Column({ type: 'varchar', nullable: true })
  public executedTime!: Date;
}

@Entity({ name: 'History' })
export class Entity_PROJECT1_History extends BaseEntity {
  @PrimaryColumn()
  @IsAlphanumeric()
  @IsDefined()
  @Length(8, 8)
  public id!: string;
}
