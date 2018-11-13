module.exports = (Yelp) => {
    // Yelp.search({term: 'dispensary'}, (data) => {
    //     data.forEach(d => {
    //         const yd = new YelpDispensary(d)
    //         yd.save();
    //     });
    // });

    YelpDispensary.find({}, async (e, data) => {
        data.forEach(async d => {
            const business = await Yelp.getBusiness(d.id);
            d.photos = business.photos;
            console.log(d.photos);
            // d.save();
        });
    });
}
