const ResCard = (props) => {

    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        location
    } = resData?.info
    return (
        <>
            <div className="border rounded ">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} height={200} className="w-100" />
                <div className="p-3">
                    <h3 className="text-truncate" >{name}</h3>
                    <div className="text-truncate mb-3" >{cuisines.join(", ")}</div>
                    <div className="small d-flex justify-content-between" >
                        <h6 className="" >{avgRating}  •  {sla.slaString}</h6>
                        <div>{location}</div>
                    </div>
                </div>
                
            </div>
        </>

    )
}

export default ResCard;