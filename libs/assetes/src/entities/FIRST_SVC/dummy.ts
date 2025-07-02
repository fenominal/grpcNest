import { IsAlphanumeric, IsDefined, Length } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';

export class messageTypes2 {
  @Column({ type: 'varchar', nullable: true })
  status: string; // value only pass or fail.

  @Column({ type: 'varchar', nullable: true })
  medium: string; // value only email or sms

  @Column({ type: 'varchar', nullable: true })
  message: string;

  @Column({ type: 'varchar', nullable: true })
  public executedTime!: Date;
}

@Entity({ name: 'dummy' })
export class Entity_FIRST_SVC_History extends BaseEntity {
  @PrimaryColumn()
  @IsAlphanumeric()
  @IsDefined()
  @Length(8, 8)
  public id!: string;

  @Column({ type: 'varchar', nullable: true })
  locationId: string;

  @Column({ type: 'jsonb', nullable: true, default: [] })
  message!: [];

  @Column({ type: 'bool', nullable: true, default: false })
  isDeleted: boolean;

  @Column({ type: 'bool', nullable: true })
  isSent: boolean;

  @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
  public createdAt: Date;

  @CreateDateColumn({ type: 'timestamp with time zone', name: 'updated_at' })
  public updatedAt: Date;
}
