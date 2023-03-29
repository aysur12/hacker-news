import Fetch from '../../utils/Fetch';
import unixTimeToDateTime from '../../utils/unixTimeToDateTime';

const Comment = ({ data }) => {
  const { by, time, text, kids } = data;
  return (
    <li>
      <div>
        <p>{by}</p>
        <div>{unixTimeToDateTime(time)}</div>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <>
        {kids &&
          kids.map((storyId) => (
            <ul>
              <Fetch
                key={storyId}
                url={`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`}
                renderSuccess={({ data }) => <Comment data={data} />}
              />
            </ul>
          ))}
      </>
    </li>
  );
};

export default Comment;
