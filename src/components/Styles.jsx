const styles = ['Animals', 'Borders', 'Conversational', 'Damask', 'Floral'];

const Styles = () => {
  return (
    <div className='filter_item'>
      <h4 className='filter_heading gray-text'>SHOP BY STYLE</h4>
      <div className='filter_content'>
        <ul className='filter_content_list'>
          {styles.map((style) => (
            <li>{style}</li>
          ))}
        </ul>
      </div>
      <p className='gray-text cursor-pointer'>11 More</p>
      <p>All Styles</p>
    </div>
  );
};

export default Styles;
