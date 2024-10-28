import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const pricingOptions = [
        {
            id: '1',
            name: 'Basic Membership',
            price: 30.0,
            features: ['Access to gym equipment', 'Group fitness classes', 'Locker room access', 'Free Wi-Fi']
        },
        {
            id: '2',
            name: 'Standard Membership',
            price: 50.0,
            features: ['All Basic Membership features', 'Unlimited group classes', '1 personal training session per month', 'Discount on merchandise']
        },
        {
            id: '3',
            name: 'Premium Membership',
            price: 75.0,
            features: ['All Standard Membership features', '24/7 gym access', 'Access to sauna and steam room', '4 personal training sessions per month', 'Nutrition consultation']
        },
        {
            id: '4',
            name: 'Family Membership',
            price: 120.0,
            features: ['Access for up to 4 family members', 'All Premium Membership features', 'Family group fitness classes', 'Discounted rates for additional family members']
        }
    ];

    return (
        <div className="m-12 space-y-4 max-w-7xl mx-auto mt-20">
            <h2 className="text-6xl text-center font-bold">Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shadow-xl">
                {pricingOptions.map(option => (
                    <PriceOption key={option.id} option={option} />
                ))}
            </div>
        </div>
    );
};

export default PriceOptions;