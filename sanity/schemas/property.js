export default {
  name: 'property',
  title: 'Property Listings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Property Title',
      type: 'string',
      description: 'e.g., Alpha Garden City Resort (500 SQM)',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Property Type',
      type: 'string',
      description: 'Category of property',
      options: {
        list: [
          { title: 'Land', value: 'land' },
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Resort', value: 'resort' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location Address',
      type: 'string',
      description: 'e.g., Ogombo, Ajah, Lagos or Academy, Ibadan',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price (Numeric)',
      type: 'number',
      description: 'Used for sorting/filtering. Numeric only (e.g., 85000000)',
      validation: Rule => Rule.required()
    },
    {
      name: 'priceLabel',
      title: 'Price Label (Display Text)',
      type: 'string',
      description: 'Formatted price. e.g., ₦85,000,000',
      validation: Rule => Rule.required()
    },
    {
      name: 'size',
      title: 'Land/Property Size',
      type: 'string',
      description: 'e.g., 300 SQM, 1 Acre, or 4 Bed Terrace',
      validation: Rule => Rule.required()
    },
    {
      name: 'titleDoc',
      title: 'Title Document',
      type: 'string',
      description: 'e.g., Certificate of Occupancy (C of O), Registered Survey',
      validation: Rule => Rule.required()
    },
    {
      name: 'badge',
      title: 'Promo Badge Text',
      type: 'string',
      description: 'Optional. e.g., Pre-Launch Offer, Hot Deal, Selling Fast'
    },
    {
      name: 'description',
      title: 'Full Property Description',
      type: 'text',
      description: 'Detailed description of the property. Supports linebreaks.',
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      title: 'Key Features List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet point highlights of the property.'
    },
    {
      name: 'images',
      title: 'Images Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload property images. You can drag and drop multiple files.',
      validation: Rule => Rule.required().min(1)
    }
  ]
}
