import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { User } from "../models/user.models.js";
import { Product } from "../models/product.models.js";
import { Order } from "../models/order.models.js";

const getDashboardStats = asyncHandler(async (req, res) => {

    const totalUsers = await User.countDocuments();

    const totalProducts = await Product.countDocuments();

    const totalOrders = await Order.countDocuments();

    const orders = await Order.find();

    let totalRevenue = 0;

    orders.forEach(order => {
        totalRevenue += order.totalAmount;
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                totalUsers,
                totalProducts,
                totalOrders,
                totalRevenue
            },
            "Dashboard stats fetched successfully"
        )
    );
});

export {
    getDashboardStats
};