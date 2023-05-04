import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../configs/db";

export interface BasicCustomer {
  id: number;
}

export interface Customer extends BasicCustomer {
  name: string;
  email?: string;
  password?: string;
}

class CustomerModel extends Model implements Customer {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}

CustomerModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Customer",
  }
);

export { CustomerModel };
