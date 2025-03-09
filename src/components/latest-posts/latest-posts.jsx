import { Link } from "react-router-dom";
import { useLatestBlogPosts } from "@asdev/asdev-blogs";
import "./latest-posts.scss";

const LatestPosts = () => {
  const { loading, posts, error } = useLatestBlogPosts(
    process.env.REACT_APP_USER_ID,
    process.env.REACT_APP_BLOG_ID
  );

  return (
    <section className="latest-posts-container">
      <h2 className="section-title">Últimos Posts</h2>

      {/* Mensaje de error */}
      {error && (
        <p className="error-message">No se pudieron cargar los posts.</p>
      )}

      {/* Cargando posts */}
      {loading && (
        <div className="posts-grid">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="post-card skeleton">
              <div className="thumbnail skeleton-thumbnail"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
            </div>
          ))}
        </div>
      )}

      {/* No hay posts */}
      {!loading && !error && posts.length === 0 && (
        <p className="no-posts">No hay publicaciones recientes.</p>
      )}

      {/* Lista de últimos posts */}
      {!loading && !error && posts.length > 0 && (
        <>
          <div className="posts-grid">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="post-card"
              >
                <img
                  className="thumbnail"
                  src={post.thumbnail || "/logo512.png"}
                  alt={`Imagen destacada de ${post.title}`}
                  loading="lazy"
                />
                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-author">Por {post.owner}</p>
                  <p className="post-excerpt">
                    {post.content.substring(0, 100)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Botón para ver más posts */}
          <div className="view-more-container">
            <Link to="/blog" className="view-more-button">
              Ver más posts
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default LatestPosts;
