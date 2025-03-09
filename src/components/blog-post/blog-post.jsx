import { useParams, Link } from "react-router-dom";
import { useBlogPost } from "@asdev/asdev-blogs";
import "./blog-post.scss";

const BlogPost = () => {
  const { slug } = useParams();
  const { post, loading, error } = useBlogPost(
    process.env.REACT_APP_USER_ID,
    process.env.REACT_APP_BLOG_ID,
    slug
  );

  return (
    <section className="blog-post-container">
      {/* Botón para volver al blog */}
      <div className="post-header">
        <Link to="/blog" className="back-button">
          ← Volver al Blog
        </Link>
      </div>

      {/* Carga en progreso */}
      {loading && <p className="loading-text">Cargando post...</p>}

      {/* Error al cargar */}
      {error && (
        <p className="error-message">
          Error al cargar el post. Intenta nuevamente.
        </p>
      )}

      {/* Post completo */}
      {!loading && !error && post && (
        <article className="post-content">
          <h1 className="post-title">{post.title}</h1>
          <p className="post-author">Escrito por: {post.owner}</p>
          <p className="post-date">
            Publicado el: {new Date(post.createdAt).toLocaleDateString("es-ES")}
          </p>

          <img
            className="post-thumbnail"
            src={post.thumbnail || "/logo512.png"}
            alt={`Imagen destacada de ${post.title}`}
            loading="lazy"
          />

          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      )}

      {/* Si no se encuentra el post */}
      {!loading && !error && !post && (
        <p className="error-message">El post no existe o ha sido eliminado.</p>
      )}
    </section>
  );
};

export default BlogPost;
