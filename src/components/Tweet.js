import Action from "./Action";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({tweet}) {
  return (
    <div className="tweet">
    <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          
            <User userInfo={tweet.user} />

          <Timestamp timestamp={tweet.timestamp} />
          </div>
          <p><Message message={tweet.message} /></p>

        



        <div className="actions">
          <Action  />
          {/* Font Awesome icons */}
          {/* <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i> */}
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
