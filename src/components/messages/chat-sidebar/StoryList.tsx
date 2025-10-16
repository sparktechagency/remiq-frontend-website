import { Avatar } from "antd";

const stories = [
  { id: 1, name: "John", avatar: "/man.jpg" },
  { id: 2, name: "Savannah", avatar: "/diverse-woman-portrait.png" },
  { id: 3, name: "Melvin", avatar: "/man.jpg" },
  { id: 4, name: "Leslie", avatar: "/diverse-woman-portrait.png" },
  { id: 5, name: "Theresa", avatar: "/diverse-woman-portrait.png" },
];

export default function StoryList() {
  return (
    <div className=" py-3 border-b border-[#1A2942]">
      <div className="flex gap-2 lg:gap-3 overflow-x-auto scrollbar-hide pb-1">
        {stories.map((story) => (
          <button
            key={story.id}
            className="flex flex-col items-center gap-1 flex-shrink-0"
          >
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-tr from-[#6B7FFF] to-[#9B8FFF] p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0D1B2E] p-[2px]">
                <Avatar
                  src={story.avatar || "/placeholder.svg"}
                  className="!w-full !h-full"
                />
              </div>
            </div>
            <span className="text-[10px] lg:text-xs text-gray-400 max-w-[48px] lg:max-w-[56px] truncate">
              {story.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
