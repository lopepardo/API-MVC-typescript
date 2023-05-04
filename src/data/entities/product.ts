import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../configs/db";

export interface BasicProduct {
  id: number;
}

export interface Product extends BasicProduct {
  name: string;
  description: string;
  instockQuantity: number;
  price: number;
}

class ProductModel extends Model implements Product {
  public id!: number;
  public name!: string;
  public description!: string;
  public instockQuantity!: number;
  public price!: number;
}

ProductModel.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    instockQuantity: {
      type: DataTypes.INTEGER,
      field: "instock_quantity",
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Product",
    underscored: true,
  }
);

export { ProductModel };
