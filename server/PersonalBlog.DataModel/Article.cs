namespace PersonalBlog.DataModel
{
    public class Article
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public bool Submited { get; set; }
        public int ArticleHeaderId { get; set; }
    }
}
