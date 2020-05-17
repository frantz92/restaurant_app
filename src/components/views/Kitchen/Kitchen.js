import React from 'react';
import Card from '@material-ui/core/Card';

const Kitchen = () => (
  <div style={{ display: 'flex' }}>
    <Card
      style={{ width: '250px', margin: '10px' }}
      variant='outlined'
      elevation={3}
    >
      Order N1
    </Card>
    <Card
      style={{ width: '250px', margin: '10px' }}
      variant='outlined'
      elevation={3}
    >
      Order N2
    </Card>
    <Card
      style={{ width: '250px', margin: '10px' }}
      variant='outlined'
      elevation={3}
    >
      Order N3
    </Card>
  </div>
);

export default Kitchen;
