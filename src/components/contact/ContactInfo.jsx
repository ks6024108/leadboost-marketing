import { Phone, Mail, MapPin, Clock3 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 7597815531",
  },

  {
    icon: Mail,
    title: "Email Support",
    value: "leadboostmarketing.com@gmail.com",
  },

  {
    icon: MapPin,
    title: "Office Location",
    value: "Civil Lines, Jaipur",
  },

  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat : 10 AM - 6:30 PM",
  },
];

const ContactInfo = () => {
  return (
    <section className="relative py-20">
      <div className="container-custom">
        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          "
        >
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                glass-effect
                border
                border-white/10
                rounded-[28px]
                p-8
                "
              >
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  mb-6
                  "
                >
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-gray-400 leading-relaxed">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
