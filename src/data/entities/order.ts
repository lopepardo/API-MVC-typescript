import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../configs/db";

import { BasicProduct, Product, ProductModel } from "./product";
import { BasicCustomer, Customer, CustomerModel } from "./customer";

export interface BasicOrder {
  product: BasicProduct;
  customer: BasicCustomer;
  productQuantity: number;
}

export interface Order extends BasicOrder {
  orderId: number;
}

export interface OrderWithDetails extends Order {
  product: Product;
  customer: Customer;
}

class ProductOrderModel extends Model implements OrderWithDetails {
  public orderId!: number;
  public product!: Product;
  public customer!: Customer;
  public productQuantity!: number;
}

ProductOrderModel.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "order_id",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "product_id",
      references: {
        model: ProductModel,
        key: "id",
      },
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "customer_id",
      references: {
        model: CustomerModel,
        key: "id",
      },
    },
    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "product_quantity",
    },
  },
  {
    sequelize,
    tableName: "ProductOrder",
    underscored: true,
    timestamps: false,
  }
);

ProductOrderModel.belongsTo(CustomerModel, {
  foreignKey: "customer_id",
  as: "customer",
});
ProductOrderModel.belongsTo(ProductModel, {
  foreignKey: "product_id",
  as: "product",
});

export { ProductOrderModel };
