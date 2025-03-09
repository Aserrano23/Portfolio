import "./blog.scss";
import { useBlogPosts } from "@asdev/asdev-blogs";
import { Link } from "react-router-dom";

export const Blog = () => {
  const { loading, posts, error } = useBlogPosts(
    process.env.REACT_APP_USER_ID,
    process.env.REACT_APP_BLOG_ID
  );

  return (
    <section className="blog-container">
      {/* Botón para volver a inicio */}
      <div className="blog-header">
        <Link to="/" className="back-button">
          ← Volver a Inicio
        </Link>
      </div>

      <h1 className="blog-title">Últimos Posts</h1>

      {/* Mensaje de error */}
      {error && (
        <p className="error-message">
          Error al cargar el blog. Intenta nuevamente.
        </p>
      )}

      {/* Skeleton Loader mientras se cargan los posts */}
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
        <h2 className="no-posts">No hay posts disponibles en este momento.</h2>
      )}

      {/* Lista de posts */}
      {!loading && !error && posts.length > 0 && (
        <div className="posts-grid">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="post-card">
              <img
                className="thumbnail"
                src={post.thumbnail || "/logo512.png"}
                alt={`Imagen destacada de ${post.title}`}
                loading="lazy"
              />
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-author">Escrito por: {post.owner}</p>
                <div
                  className="post-excerpt"
                  dangerouslySetInnerHTML={{
                    __html: post.content.substring(0, 200) + "...",
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};
