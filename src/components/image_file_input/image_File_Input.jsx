import React, { useRef, useState } from 'react';
import styles from './image_File_Input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        onChange={onChange}
        className={styles.file}
        type="file"
        accept="image/*"
        name="file"
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || 'No file'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
