interface AvatarProps {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
}

const Avatar = ({ src, alt = 'Avatar', style }: AvatarProps) => {
  return (
    <div className="avatar avatar-circle" style={style}>
      <img src={src} alt={alt} className="rounded-circle img-fluid avatar-img" />
    </div>
  );
};

export default Avatar;
