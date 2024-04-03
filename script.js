//Resume json data

const resume = {
    "name": "Shafeera Zahur",
    "contact_information": {
      "email": "shafeerazahur3@example.com",
      "phone": "+91 1234567890",
      "address": "123 Main Street, Cityville, State, Zip"
    },
    "summary": "To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills excellent time management and problem-solving skills",
    "education": [
      {
        "degree": "Bachelor of Engineering in Computer Science",
        "institution": "Anna University",
        "location": "Chennai",
        "graduation_year": "2019"
      }
    ],
    "experience": [
      {
        "position": "Software Engineer",
        "company": "Tech Solutions Inc.",
        "location": "Cityville, State",
        "start_date": "January 2020",
        "end_date": "Present",
        "responsibilities": [
          "Developing and maintaining web applications using JavaScript frameworks like React and Angular.",
          "Collaborating with cross-functional teams to define, design, and ship new features.",
          "Performing code reviews to ensure code quality and adherence to coding standards.",
          "Troubleshooting and debugging issues reported by users and providing timely resolutions."
        ]
      },
      {
        "position": "Software Developer Intern",
        "company": "ABC Software Company",
        "location": "Citytown, State",
        "start_date": "June 2018",
        "end_date": "December 2018",
        "responsibilities": [
          "Assisted in the development and testing of new features for web applications.",
          "Worked closely with senior developers to understand and implement software requirements.",
          "Participated in team meetings and contributed ideas for improving project efficiency."
        ]
      }
    ],
    "skills": [
      {
        "category": "Programming Languages",
        "list": ["JavaScript", "Python", "Java"]
      },
      {
        "category": "Web Development",
        "list": ["HTML", "CSS", "React", "Angular"]
      },
      {
        "category": "Database Management",
        "list": ["SQL", "MongoDB"]
      },
      {
        "category": "Tools",
        "list": ["Git", "Docker", "VS Code"]
      }
    ],
    "languages": ["English (Fluent)", "Hindi (Fluent)", "Tamil(Fluent)"]
  };
  
  // Iterate using for of loop
  for (const [key, value] of Object.entries(resume)) {
    if (Array.isArray(value)) {
      console.log(`${key}:`);
      for (const item of value) {
        if (typeof item === 'object') {
          for (const [subKey, subValue] of Object.entries(item)) {
            if (Array.isArray(subValue)) {
              console.log(`${subKey}:`);
              subValue.forEach(subItem => console.log(`- ${subItem}`));
            } else {
              console.log(`${subKey}: ${subValue}`);
            }
          }
        } else {
          console.log(`- ${item}`);
        }
      }
    } else if (typeof value === 'object') {
      console.log(`${key}:`);
      for (const [subKey, subValue] of Object.entries(value)) {
        console.log(`${subKey}: ${subValue}`);
      }
    } else {
      console.log(`${key}: ${value}`);
    }
    console.log();
  }

  // Iterate using for loop

const keys = Object.keys(resume);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = resume[key];
  if (Array.isArray(value)) {
    console.log(`${key}:`);
    for (let j = 0; j < value.length; j++) {
      const item = value[j];
      if (typeof item === 'object') {
        const subKeys = Object.keys(item);
        for (let k = 0; k < subKeys.length; k++) {
          const subKey = subKeys[k];
          const subValue = item[subKey];
          if (Array.isArray(subValue)) {
            console.log(`${subKey}:`);
            subValue.forEach(subItem => console.log(`- ${subItem}`));
          } else {
            console.log(`${subKey}: ${subValue}`);
          }
        }
      } else {
        console.log(`- ${item}`);
      }
    }
  } else if (typeof value === 'object') {
    console.log(`${key}:`);
    const subKeys = Object.keys(value);
    for (let j = 0; j < subKeys.length; j++) {
      const subKey = subKeys[j];
      const subValue = value[subKey];
      console.log(`${subKey}: ${subValue}`);
    }
  } else {
    console.log(`${key}: ${value}`);
  }
  console.log();
}

//Iterate over for in loop

for (const key in resume) {
    const value = resume[key];
    if (Array.isArray(value)) {
      console.log(`${key}:`);
      for (const item of value) {
        if (typeof item === 'object') {
          for (const subKey in item) {
            const subValue = item[subKey];
            if (Array.isArray(subValue)) {
              console.log(`${subKey}:`);
              subValue.forEach(subItem => console.log(`- ${subItem}`));
            } else {
              console.log(`${subKey}: ${subValue}`);
            }
          }
        } else {
          console.log(`- ${item}`);
        }
      }
    } else if (typeof value === 'object') {
      console.log(`${key}:`);
      for (const subKey in value) {
        const subValue = value[subKey];
        console.log(`${subKey}: ${subValue}`);
      }
    } else {
      console.log(`${key}: ${value}`);
    }
    console.log();
  }

  
  //Iterate over for each loop

  Object.entries(resume).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      console.log(`${key}:`);
      value.forEach(item => {
        if (typeof item === 'object') {
          Object.entries(item).forEach(([subKey, subValue]) => {
            if (Array.isArray(subValue)) {
              console.log(`${subKey}:`);
              subValue.forEach(subItem => console.log(`- ${subItem}`));
            } else {
              console.log(`${subKey}: ${subValue}`);
            }
          });
        } else {
          console.log(`- ${item}`);
        }
      });
    } else if (typeof value === 'object') {
      console.log(`${key}:`);
      Object.entries(value).forEach(([subKey, subValue]) => {
        console.log(`${subKey}: ${subValue}`);
      });
    } else {
      console.log(`${key}: ${value}`);
    }
    console.log();
  });
  

  