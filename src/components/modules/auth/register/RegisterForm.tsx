import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
    const form = useForm()
    return (
        <div> 
            <Form {...form}>
  <FormField
    control={form.control}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */}
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
            
        </div>
    );
};

export default RegisterForm; 