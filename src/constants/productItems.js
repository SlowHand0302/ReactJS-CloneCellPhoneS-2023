import images from '../assets/img';

const productItems = [
    {
        name: 'Màn hình cong Ultrawide Xiaomi Curved Gaming 34 inch',
        newPrice: 7990000,
        oldPrice: 12990000,
        updatePrice: 7490000,
        percentOff: '38%',
        rate: '5star',
        peferential: [],
        img: images.products[0],
    },
    {
        name: 'Google Tivi Coocaa 4K 55 inch 55V8',
        newPrice: 6490000,
        oldPrice: 13990000,
        updatePrice: 0,
        percentOff: '54%',
        rate: '5star',
        peferential: [],
        img: images.products[1],
    },
    {
        name: 'Tai nghe Bluetooth True Wireless JBL Tune Flex - Chỉ có tại CellphoneS',
        newPrice: 2690000,
        oldPrice: 0,
        updatePrice: 0,
        percentOff: '0%',
        rate: '0star',
        peferential: [
            'Tặng pin dự phòng Aukey Basix Slim 10000mAh PB-N99 trị giá 490.000đ',
            'Tặng túi đeo chéo SGS x JBL trị giá 500.000đ',
        ],
        img: images.products[2],
    },
    {
        name: 'Đồng hồ thông minh Huawei Watch GT4 dây da',
        newPrice: 5490000,
        oldPrice: 6490000,
        updatePrice: 4490000,
        percentOff: '15%',
        rate: '0star',
        peferential: ['Tặng tai nghe không dây Huawei Freebuds SE 2'],
        img: images.products[3],
    },
    {
        name: 'iPhone 15 Pro Max 256GB | Chính hãng VN/A',
        newPrice: 34390000,
        oldPrice: 34990000,
        updatePrice: 32390000,
        percentOff: '4%',
        rate: '5star',
        peferential: [
            'Ưu đãi đối tác giảm 1 triệu khi thanh toán qua UOB, Eximbank và Kredivo (không áp dụng cùng ưu đãi giảm giá trực tiếp)',
            'Giảm đến 500k khi trả góp 0% qua công ty tài chính Home Credit',
            'Giảm 500k khi thanh toán qua VNPay',
        ],
        img: images.products[4],
    },
    {
        name: 'Lò vi sóng tráng men nướng Samsung MG23T5018CK 23L',
        newPrice: 2890000,
        oldPrice: 3990000,
        updatePrice: 0,
        percentOff: '28%',
        rate: '0star',
        peferential: [],
        img: images.products[5],
    },
    {
        name: 'Samsung Galaxy Tab S9 Wifi 12GB 256GB',
        newPrice: 19090000,
        oldPrice: 21990000,
        updatePrice: 18090000,
        percentOff: '27%',
        rate: '0star',
        peferential: [
            'Tặng gói dịch vụ đặc quyền (Microsoft Office 365,...) thông qua ứng dụng quà tặng Galaxy (Mã quà tặng có thể hết trước khi kết thúc chương trình)',
        ],
        img: images.products[6],
    },
    {
        name: 'Laptop Asus VivoBook Go 14 E1404FA-NK177W',
        newPrice: 12990000,
        oldPrice: 14490000,
        updatePrice: 9990000,
        percentOff: '10%',
        rate: '0star',
        peferential: [],
        img: images.products[7],
    },
    {
        name: 'Màn hình cong Ultrawide Xiaomi Curved Gaming 34 inch',
        newPrice: 7990000,
        oldPrice: 12990000,
        updatePrice: 7490000,
        percentOff: '38%',
        rate: '5star',
        peferential: [],
        img: images.products[0],
    },
    {
        name: 'Google Tivi Coocaa 4K 55 inch 55V8',
        newPrice: 6490000,
        oldPrice: 13990000,
        updatePrice: 0,
        percentOff: '54%',
        rate: '5star',
        peferential: [],
        img: images.products[1],
    },
    {
        name: 'Tai nghe Bluetooth True Wireless JBL Tune Flex - Chỉ có tại CellphoneS',
        newPrice: 2690000,
        oldPrice: 0,
        updatePrice: 0,
        percentOff: '0%',
        rate: '0star',
        peferential: [
            'Tặng pin dự phòng Aukey Basix Slim 10000mAh PB-N99 trị giá 490.000đ',
            'Tặng túi đeo chéo SGS x JBL trị giá 500.000đ',
        ],
        img: images.products[2],
    },
    {
        name: 'Đồng hồ thông minh Huawei Watch GT4 dây da',
        newPrice: 5490000,
        oldPrice: 6490000,
        updatePrice: 4490000,
        percentOff: '15%',
        rate: '0star',
        peferential: ['Tặng tai nghe không dây Huawei Freebuds SE 2'],
        img: images.products[3],
    },
    {
        name: 'iPhone 15 Pro Max 256GB | Chính hãng VN/A',
        newPrice: 34390000,
        oldPrice: 34990000,
        updatePrice: 32390000,
        percentOff: '4%',
        rate: '5star',
        peferential: [
            'Ưu đãi đối tác giảm 1 triệu khi thanh toán qua UOB, Eximbank và Kredivo (không áp dụng cùng ưu đãi giảm giá trực tiếp)',
            'Giảm đến 500k khi trả góp 0% qua công ty tài chính Home Credit',
            'Giảm 500k khi thanh toán qua VNPay',
        ],
        img: images.products[4],
    },
    {
        name: 'Lò vi sóng tráng men nướng Samsung MG23T5018CK 23L',
        newPrice: 2890000,
        oldPrice: 3990000,
        updatePrice: 0,
        percentOff: '28%',
        rate: '0star',
        peferential: [],
        img: images.products[5],
    },
    {
        name: 'Samsung Galaxy Tab S9 Wifi 12GB 256GB',
        newPrice: 19090000,
        oldPrice: 21990000,
        updatePrice: 18090000,
        percentOff: '27%',
        rate: '0star',
        peferential: [
            'Tặng gói dịch vụ đặc quyền (Microsoft Office 365,...) thông qua ứng dụng quà tặng Galaxy (Mã quà tặng có thể hết trước khi kết thúc chương trình)',
        ],
        img: images.products[6],
    },
    {
        name: 'Laptop Asus VivoBook Go 14 E1404FA-NK177W',
        newPrice: 12990000,
        oldPrice: 14490000,
        updatePrice: 9990000,
        percentOff: '10%',
        rate: '0star',
        peferential: [],
        img: images.products[7],
    },
    {
        name: 'Màn hình cong Ultrawide Xiaomi Curved Gaming 34 inch',
        newPrice: 7990000,
        oldPrice: 12990000,
        updatePrice: 7490000,
        percentOff: '38%',
        rate: '5star',
        peferential: [],
        img: images.products[0],
    },
    {
        name: 'Google Tivi Coocaa 4K 55 inch 55V8',
        newPrice: 6490000,
        oldPrice: 13990000,
        updatePrice: 0,
        percentOff: '54%',
        rate: '5star',
        peferential: [],
        img: images.products[1],
    },
    {
        name: 'Tai nghe Bluetooth True Wireless JBL Tune Flex - Chỉ có tại CellphoneS',
        newPrice: 2690000,
        oldPrice: 0,
        updatePrice: 0,
        percentOff: '0%',
        rate: '0star',
        peferential: [
            'Tặng pin dự phòng Aukey Basix Slim 10000mAh PB-N99 trị giá 490.000đ',
            'Tặng túi đeo chéo SGS x JBL trị giá 500.000đ',
        ],
        img: images.products[2],
    },
    {
        name: 'Đồng hồ thông minh Huawei Watch GT4 dây da',
        newPrice: 5490000,
        oldPrice: 6490000,
        updatePrice: 4490000,
        percentOff: '15%',
        rate: '0star',
        peferential: ['Tặng tai nghe không dây Huawei Freebuds SE 2'],
        img: images.products[3],
    },
    {
        name: 'iPhone 15 Pro Max 256GB | Chính hãng VN/A',
        newPrice: 34390000,
        oldPrice: 34990000,
        updatePrice: 32390000,
        percentOff: '4%',
        rate: '5star',
        peferential: [
            'Ưu đãi đối tác giảm 1 triệu khi thanh toán qua UOB, Eximbank và Kredivo (không áp dụng cùng ưu đãi giảm giá trực tiếp)',
            'Giảm đến 500k khi trả góp 0% qua công ty tài chính Home Credit',
            'Giảm 500k khi thanh toán qua VNPay',
        ],
        img: images.products[4],
    },
    {
        name: 'Lò vi sóng tráng men nướng Samsung MG23T5018CK 23L',
        newPrice: 2890000,
        oldPrice: 3990000,
        updatePrice: 0,
        percentOff: '28%',
        rate: '0star',
        peferential: [],
        img: images.products[5],
    },
    {
        name: 'Samsung Galaxy Tab S9 Wifi 12GB 256GB',
        newPrice: 19090000,
        oldPrice: 21990000,
        updatePrice: 18090000,
        percentOff: '27%',
        rate: '0star',
        peferential: [
            'Tặng gói dịch vụ đặc quyền (Microsoft Office 365,...) thông qua ứng dụng quà tặng Galaxy (Mã quà tặng có thể hết trước khi kết thúc chương trình)',
        ],
        img: images.products[6],
    },
    {
        name: 'Laptop Asus VivoBook Go 14 E1404FA-NK177W',
        newPrice: 12990000,
        oldPrice: 14490000,
        updatePrice: 9990000,
        percentOff: '10%',
        rate: '0star',
        peferential: [],
        img: images.products[7],
    },
    {
        name: 'Màn hình cong Ultrawide Xiaomi Curved Gaming 34 inch',
        newPrice: 7990000,
        oldPrice: 12990000,
        updatePrice: 7490000,
        percentOff: '38%',
        rate: '5star',
        peferential: [],
        img: images.products[0],
    },
    {
        name: 'Google Tivi Coocaa 4K 55 inch 55V8',
        newPrice: 6490000,
        oldPrice: 13990000,
        updatePrice: 0,
        percentOff: '54%',
        rate: '5star',
        peferential: [],
        img: images.products[1],
    },
    {
        name: 'Tai nghe Bluetooth True Wireless JBL Tune Flex - Chỉ có tại CellphoneS',
        newPrice: 2690000,
        oldPrice: 0,
        updatePrice: 0,
        percentOff: '0%',
        rate: '0star',
        peferential: [
            'Tặng pin dự phòng Aukey Basix Slim 10000mAh PB-N99 trị giá 490.000đ',
            'Tặng túi đeo chéo SGS x JBL trị giá 500.000đ',
        ],
        img: images.products[2],
    },
    {
        name: 'Đồng hồ thông minh Huawei Watch GT4 dây da',
        newPrice: 5490000,
        oldPrice: 6490000,
        updatePrice: 4490000,
        percentOff: '15%',
        rate: '0star',
        peferential: ['Tặng tai nghe không dây Huawei Freebuds SE 2'],
        img: images.products[3],
    },
    {
        name: 'iPhone 15 Pro Max 256GB | Chính hãng VN/A',
        newPrice: 34390000,
        oldPrice: 34990000,
        updatePrice: 32390000,
        percentOff: '4%',
        rate: '5star',
        peferential: [
            'Ưu đãi đối tác giảm 1 triệu khi thanh toán qua UOB, Eximbank và Kredivo (không áp dụng cùng ưu đãi giảm giá trực tiếp)',
            'Giảm đến 500k khi trả góp 0% qua công ty tài chính Home Credit',
            'Giảm 500k khi thanh toán qua VNPay',
        ],
        img: images.products[4],
    },
    {
        name: 'Lò vi sóng tráng men nướng Samsung MG23T5018CK 23L',
        newPrice: 2890000,
        oldPrice: 3990000,
        updatePrice: 0,
        percentOff: '28%',
        rate: '0star',
        peferential: [],
        img: images.products[5],
    },
    {
        name: 'Samsung Galaxy Tab S9 Wifi 12GB 256GB',
        newPrice: 19090000,
        oldPrice: 21990000,
        updatePrice: 18090000,
        percentOff: '27%',
        rate: '0star',
        peferential: [
            'Tặng gói dịch vụ đặc quyền (Microsoft Office 365,...) thông qua ứng dụng quà tặng Galaxy (Mã quà tặng có thể hết trước khi kết thúc chương trình)',
        ],
        img: images.products[6],
    },
    {
        name: 'Laptop Asus VivoBook Go 14 E1404FA-NK177W',
        newPrice: 12990000,
        oldPrice: 14490000,
        updatePrice: 9990000,
        percentOff: '10%',
        rate: '0star',
        peferential: [],
        img: images.products[7],
    },
];

export default productItems;