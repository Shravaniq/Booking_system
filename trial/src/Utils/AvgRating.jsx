const calculateAvgRating = reviews =>
{
    
        const totalRating = reviews?.reduce((acc,items)=>acc + items.rating,0)
        const avgRating = 
        totalRating === 0 
        ? ""
        : totalRating === 1
        ? totalRating : 
        totalRating / reviews?.length;

        return{
            totalRating,
            avgRating
        }
}

export default calculateAvgRating