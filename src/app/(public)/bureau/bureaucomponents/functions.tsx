'use client';

const responsibilities = [
  "Formulate Policies and Guidelines for the Procurement of Goods and Services by the Federal Government of Nigeria.",
  "Publicize Procurement opportunities, and invite bids, evaluate bids and award contracts for works, goods and services.",
  "Maintain and update a database of contractors and service providers.",
  "Ensure the application of fair, competitive, transparent, value-for-money standards and practices for procurement and disposal of public assets.",
  "Monitor procurement and contract execution for compliance with rules and regulations.",
  "Prevent fraudulent practices and corruption in the procurement process.",
  "Review and recommend revision of procurement policies and practices.",
  "Organize training and development programs for procurement professionals.",
  "Collaborate with relevant bodies to improve procurement reforms and build institutional capacity.",
  "Develop, maintain and update the procurement database and records.",
  "Publish procurement guidelines and manuals to improve public procurement practices.",
  "Establish a single unified database and classification system for contractors, suppliers, and consultants.",
  "Review procurement thresholds for different ministries, departments and agencies.",
  "Provide oversight and coordination of all federal procurement activities.",
  "Promote transparency, accountability and ethical conduct in public procurement.",
  "Encourage competition and efficiency in public procurement processes.",
  "Promote and support local content and indigenous contractors.",
  "Ensure procurement planning aligns with budget implementation.",
  "Coordinate contract award reporting and publication nationally."
];

export default function BppResponsibilities() {
  return (
    <section className="pt-40 pb-16 px-4 md:px-16 w-full mx-auto bg-white ">
      

      <div className="relative max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-black rounded-full hidden sm:block" />

        <ul className="space-y-8">
          {responsibilities.map((item, idx) => (
            <li key={idx} className="relative pl-10 sm:pl-12 text-[17px] text-gray-700">
              {/* Green circle */}
              <div className="absolute left-0 sm:left-2.5 top-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black shadow-sm" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
