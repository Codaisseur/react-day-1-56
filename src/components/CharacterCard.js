
// {"id":1,"name":"Luna Lovegood","blood":"Pure-blood","species":"Human","patronus":"Hare","born":"13 February, 1981","quote":"Things we lose have a way of coming back to us in the end, if not always in the way we expect","imgUrl":"https://static.wikia.nocookie.net/harry-potter-pedia/images/8/87/Luna_profile.png","createdAt":"2021-12-02T21:07:52.224Z","updatedAt":"2021-12-02T21:07:52.224Z","houseId":3,"house":{"id":3,"name":"Ravenclaw","founder":"Rowena Ravenclaw","animal":"Eagle","colors":"Blue and Bronze","ghost":"Grey Lady","imgUrl":"https://1.bp.blogspot.com/-3AU33l-fvxI/V-pACpACLHI/AAAAAAAAFKs/Mqcqyj2sTQksDlMg9vx6TSrarVzZWW-VwCLcB/s1600/pm-pride-Ravenclaw-Twitter-Header-Image-1500-x-500-px.png","createdAt":"2021-12-02T21:07:52.215Z","updatedAt":"2021-12-02T21:07:52.215Z"}}


const CharacterCard = (props) => {

  const { name, image, quote, species } = props;
  return (
    <div style={{ margin: 15, border: "1px solid white", padding: 10, maxWidth: 350}}>
      <h3>{name}</h3>
      <img src={image} alt={name} width={200} />
      <p>Species: {species}</p>
      <p><em>{quote}</em></p>
    </div>
  
  );
}
 
export default CharacterCard;