import React, { useEffect, useRef } from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

import { notifications } from '@mantine/notifications';

const DashboardPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-200">Dashboard</h1>
      </div>
    </div>
  );
};

export default DashboardPage;
