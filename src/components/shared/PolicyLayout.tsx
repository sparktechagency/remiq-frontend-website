interface policyPageProps {
  content: string;
  title: string;
}

export default function PolicyLayout({ content, title }: policyPageProps) {
  return (
    <div className=" ">
      <div className="container mx-auto p-4 pt-8 lg:pt-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-[40px] text-white/90 rounded-lg font-semibold  mb-2 ">
            {title}
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-transparent text-white/80 leading-relaxed ">
          <article
            className="prose prose-gray max-w-none prose-headings:text-[#2D2D2D] prose-a:text-[#0056B3] hover:prose-a:text-[#1B76E0] "
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}
