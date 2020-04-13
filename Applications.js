const applications = [
  {
    id: 1,
    name: 'ID card scan',
    project_name: 'ID card scan',
    project_type: 'HyPAS',
    version: {
      number: 'E000.000.321.123',
      date: Date.now(),
      details: 'First release'
    },
    base_application: {
      name: 'Novo',
      link: 'https://www.novo.com/hypas.app'
    },
    description: 'describe',
    sales_company: 'KDAS',
    customer_name: 'PhilCopy',
    dev_status: 'ONGOING',
    dev_remarks: 'Ongoing coding',
    references: [
      {
        name: 'Novo',
        link: 'https://www.novo.com/hypas.app'
      }
    ],
    features: [
      {
        name: 'ID card scan',
        min_hypas_api: '3.6'
      },
      {
        name: 'Scanning',
        min_hypas_api: '1'
      }
    ],
    functions: [
      'Scan resolution',
      'Orientation'
    ],
    target_device: [
      {
        model_code: 'Iris2',
        model_name: 'TASKalfa 5002'
      }
    ],
    others: 'This scans ID cards.'
  },
  {
      id: 2,
      name: 'Multicrop',
      project_type: 'HyPAS',
      version: {
        number: 'E1111.000.321.123',
        date: Date.now(),
        details: 'First release'
      },
      base_application: {
        name: 'Novo',
        link: 'https://www.novo.com/hypas.app'
      },
      description: 'describe',
      sales_company: 'KDC',
      customer_name: 'KDC',
      dev_status: 'COMPLETED',
      dev_remarks: 'Released',
      references: [
        {
          name: 'Novo',
          link: 'https://www.novo.com/hypas.app'
        }
      ],
      features: [
        {
          name: 'ID card scan',
          min_hypas_api: '3.6'
        }
      ],
      functions: [
        'Scan resolution',
        'Orientation'
      ],
      target_device: [
        {
          model_code: 'Iris2',
          model_name: 'TASKalfa 5002'
        }
      ],
      others: 'This scans ID cards.'
  },
  {
      id: 3,
      name: 'Novo',
      project_type: 'HyPAS',
      version: {
        number: 'E000.AAA.321.123',
        date: Date.now(),
        details: 'First release'
      },
      base_application: {
        name: 'Novo',
        link: 'https://www.novo.com/hypas.app'
      },
      description: 'describe',
      sales_company: 'KDTH',
      customer_name: 'PhilCopy',
      dev_status: 'COMPLETED',
      dev_remarks: 'Released',
      references: [],
      features: [
        {
          name: 'ID card scan',
          min_hypas_api: '3.6'
        }
      ],
      functions: [
        'Scan resolution',
        'Orientation'
      ],
      target_device: [
        {
          model_code: 'Iris2',
          model_name: 'TASKalfa 5002'
        }
      ],
      others: 'This scans ID cards.'
  }
];

module.exports = applications;