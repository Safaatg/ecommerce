import SocialItem from "../SocialItem/SocialItem"
function Social(){
    const info = [
        {   
            id:1,
            img:"https://picsum.photos/200",
            ItemName:"safaa saeed",
            job :"Frontend",
            phone: "01736373893",
            email :"safaa@gmail.com", 
        },
        {
            id:2,
            img:"https://picsum.photos/202",
            ItemName:"suzy Elzahar",
            job :"Graphic desginer",
            phone: "01736373893",
            email :"safaa@gmail.com",  
        },
        {
            id:3,
            img:"https://picsum.photos/204",
            ItemName:"Abdullah Omer",
            job :"UI UX",
            phone: "01736373893",
        },
        {
            id:4,
            img:"https://picsum.photos/206",
            ItemName:"Nesma mohammed",
            job :"Dector",
            phone: "01736373893",
        },
    ]
    const members = info.map((member)=>{
        return <SocialItem
        key= {member.id}
        img= {member.img}
        ItemName= {member.ItemName}
        job = {member.job}
        phone = {member.phone}
        
        />
    });
    
    return(
        <ul className="list-group">
            {members}

        </ul>
    )
}

export default Social