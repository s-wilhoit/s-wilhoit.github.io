import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  interest: z.string().min(1, { message: "Please select an interest" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactInfoContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const contactInfoItem = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="contact" className="py-20 min-h-screen flex items-center relative bg-dark text-white">
      <div className="absolute top-0 left-0 w-1/2 h-full">
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&h=1200" 
          alt="Creative storytelling concept" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact heading */}
          <motion.div
            className="reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <div className="w-20 h-1 bg-harvard mb-8"></div>
            
            <p className="text-lg mb-10 max-w-lg">
              Whether you're interested in my policy work, seeking college consulting services, or just want to learn more about my journey, I'd love to hear from you.
            </p>
            
            <motion.div 
              className="space-y-6 mb-10"
              variants={contactInfoContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div 
                className="flex items-start"
                variants={contactInfoItem}
              >
                <div className="text-harvard mr-4 mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">contact@johndoe.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={contactInfoItem}
              >
                <div className="text-harvard mr-4 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">Location</h4>
                  <p className="text-gray-300">Cambridge, Massachusetts</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={contactInfoItem}
              >
                <div className="text-harvard mr-4 mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold mb-1">Consulting Hours</h4>
                  <p className="text-gray-300">By appointment, weekdays 9AM-6PM EST</p>
                </div>
              </motion.div>
            </motion.div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-harvard transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-harvard transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-harvard transition-colors" aria-label="Medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" x2="8" y1="13" y2="13"/>
                  <line x1="16" x2="8" y1="17" y2="17"/>
                  <line x1="10" x2="8" y1="9" y2="9"/>
                </svg>
              </a>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            className="bg-white text-dark rounded-xl shadow-2xl p-8 reveal opacity-0 translate-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="font-playfair text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-montserrat font-semibold">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harvard" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-montserrat font-semibold">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your email" 
                          type="email" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harvard" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-montserrat font-semibold">I'm interested in:</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harvard">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="policy">Your Policy Work</SelectItem>
                          <SelectItem value="consulting">College Consulting</SelectItem>
                          <SelectItem value="speaking">Speaking Engagement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-montserrat font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can I help you?" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-harvard" 
                          rows={4} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-harvard hover:bg-opacity-90 text-white font-montserrat font-semibold py-3 px-8 rounded-lg inline-flex items-center justify-center transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
