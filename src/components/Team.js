import TeamInfo from '../data/TeamInfo';

const Team = () =>{
    return (
        <div >
            <h2 className="text-4xl font-semibold mb-8 pt-20 text-center" >The Team</h2>
            <div className='flex flex-wrap items-center justify-center'>
            {TeamInfo.map((item)=>{
                const {id , name , position , image} = item;
                return(
                    <div key={id} className="w-80 h-96 p-6 m-6 text-center bg-persian-indigo-50 flex flex-col justify-between items-center">
                      <img src={image} alt={name +"/" + position} 
                        className="w-56 h-56 rounded-full" />
                      <h2 className='text-lg'>{name}</h2>
                      <p className='text-xs '>{position}</p>                     
                    </div>
                )
            })}
            </div>
        </div>
    );
}
export default Team;