export function getTransactionIcon(category?: string) {

    if (!category) {
        return "❓";
    }

    category = category.toLowerCase();

    switch (category) {
        case "income":
            return "💵";
        case "transfer_in":
            return "🔽";
        case "transfer_out":
            return "🔼";
        case "loan_payments":
            return "💳";
        case "bank_fees":
            return "🏦";
        case "entertainment":
            return "🎬";
        case "food_and_drink":
            return "🍔";
        case "general_merchandise":
            return "🛍️";
        case "home_improvement":
            return "🏠";
        case "medical":
            return "🩺";
        case "personal_care":
            return "💄";
        case "general_services":
            return "🔧";
        case "government_and_non_profit":
            return "🏛️";
        case "transportation":
            return "🚗";
        case "travel":
            return "✈️";
        case "rent_and_utilities":
            return "🧾";
        default:
            return "❓";
    }
}
