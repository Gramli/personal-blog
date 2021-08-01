using System;

namespace PersonalBlog.Service.DataContracts
{
    public class FullArticle
    {
        public int ArticleId { get; set; }
        public int ArticleHeaderId { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public string Description { get; set; }
        public string Content { get; set; }
        public bool Submited { get; set; }
    }
}
