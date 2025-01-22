import Image from "@node_modules/next/image"
import PromptCard from "../prompt-card/PromptCard"

const Profile = ({image , name , email , data}) => {
  return (
    <section>
      {/* Profile details */}
      <div className="flex flex-col justify-center items-center">
        <Image
        src={image ? image : "/user.png"}
        alt={`image${name}`}
        width={100}
        height={100}
        quality={100}
        className="rounded-full mx-auto object-contain"
        />
        <h3 className="text-primary font-bold text-[30px]">{name}</h3>
        <h4 className="text-text text-[15px]">{email}</h4>
      </div>
      {/* Posts */}
      <div className="mt-[50px]">
        <h1 className="text-mainColor text-[30px] capitalize font-bold text-center">your posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {data.map((post)=> (
          <PromptCard
          key={post._id}
          post={post}
          />
        ))}
        </div>
      </div>
    </section>
  )
}

export default Profile